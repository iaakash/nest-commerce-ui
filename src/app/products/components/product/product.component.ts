import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getImgContent(img): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(img);
}

}
