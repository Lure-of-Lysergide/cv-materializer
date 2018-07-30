import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nița Radu CV';
  captureScreen() {
    const element = document.getElementById('contentToConvert');
    html2canvas(element, {
      // useCORS: true, proxy: 'https://cors-anywhere.herokuapp.com/',
      windowWidth: 850, allowTaint: false
      // windowwidth is set to 850 for better printing
    }).then((canvas) => {
      // FIXME: CSP PROBLEMS !!!
      const img = canvas.toDataURL('image/jpeg', 1.0);
      const doc = new jsPDF('p', 'mm', 'a4');
      doc.addImage(img, 'JPEG', 0, 0); // 15,40,180,180
      doc.save('Nita_Radu_CV.pdf');
    });
  }
}
