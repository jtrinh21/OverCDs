import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/shared/album';
import { CartService } from 'src/app/shared/cart.service';
import { NavService } from 'src/app/shared/nav.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() albums = [];
  albumSelected: Album;
  searchInput = ''; 

  constructor(private cartService: CartService, private navService: NavService) { }

  ngOnInit(): void {
    this.getSearchInput();
  }

  addItemToCart(id: string): void{
    const item = this.albums.find(ele => ele.id === id);
    this.cartService.addItemToCart(item);
  }

  getSearchInput() {
    this.navService.inputSearchChanged.subscribe(res => {
      this.searchInput = res;
    })
  }

}