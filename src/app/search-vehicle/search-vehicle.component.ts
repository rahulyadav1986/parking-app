
import { Location } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BeepService } from '../beep.service';
import Quagga from 'quagga';
import { Article } from '../Article';
import { ShoppingCart } from '../shopping-cart';
import { UpdateService } from '../update.service';
@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.component.html',
  styleUrls: ['./search-vehicle.component.scss']
})
export class SearchVehicleComponent implements AfterViewInit {

  errorMessage: string;

  shoppingCart: ShoppingCart;
  private catalogue: Article[] = [
    { name: 'Classy Crab (red)', ean: '7601234567890', image: 'assets/classy_crab_red.png', price: 10 },
    { name: 'Classy Crab (blue)', ean: '7601234561232', image: 'assets/classy_crab_blue.png', price: 10 },
    { name: 'Classy Crab (gold, ltd. ed.)', ean: '7601234564561', image: 'assets/classy_crab_gold.png', price: 50 }
  ];

  private lastScannedCode: string;
  private lastScannedCodeDate: number;
  open: boolean = false;
  constructor(
    private location: Location,
    private changeDetectorRef: ChangeDetectorRef,
    private beepService: BeepService,
    private updateService: UpdateService
    ) { 
      this.shoppingCart = new ShoppingCart();
    }
    openbaby(){
      this.open = true;
    }
    ngAfterViewInit(): void {
      if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
        this.errorMessage = 'getUserMedia is not supported';
        return;
      }
  
      Quagga.init({
          inputStream: {
            constraints: {
              facingMode: 'environment'
            },
            area: { // defines rectangle of the detection/localization area
              top: '40%',    // top offset
              right: '0%',  // right offset
              left: '0%',   // left offset
              bottom: '40%'  // bottom offset
            },
          },
          decoder: {
            readers: ['ean_reader']
          },
        },
        (err) => {
          if (err) {
            this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
          } else {
            Quagga.start();
            Quagga.onDetected((res) => {
              this.onBarcodeScanned(res.codeResult.code);
            });
          }
        });
  
      setTimeout(() => {
        this.updateService.checkForUpdates();
      }, 10000);
    }
    
    onBarcodeScanned(code: string) {
  
      // ignore duplicates for an interval of 1.5 seconds
      const now = new Date().getTime();
      if (code === this.lastScannedCode && (now < this.lastScannedCodeDate + 1500)) {
        return;
      }
  
      // ignore unknown articles
      const article = this.catalogue.find(a => a.ean === code);
      if (!article) {
        return;
      }
  
      this.shoppingCart.addArticle(article);
  
      this.lastScannedCode = code;
      this.lastScannedCodeDate = now;
      this.beepService.beep();
      this.changeDetectorRef.detectChanges();
    }
    
  goBack() {
    // window.history.back();
    this.location.back();
  }
}
