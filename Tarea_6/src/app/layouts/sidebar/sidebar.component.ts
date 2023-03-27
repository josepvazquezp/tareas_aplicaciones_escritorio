import { Component } from '@angular/core';
import { SdElement } from 'src/app/shared/interfaces/sd-element';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  infos: Array<SdElement> = [
    {
      tittle: 'Program Languages',
      elements: [
        "Python",
        "C",
        "Java",
        "JavaScript"
      ],
      br: true
    },
    {
      tittle: 'Extracuricular',
      elements: [
        "Piano",
        "Karate",
        "Club Amigos Teletón (social service since 2017)"
      ],
      br: true
    },
    {
      tittle: 'Education',
      elements: [
        "ITESO (Cursing 6° semester)",
        "KUMON",
        "IMAO (High School)"
      ],
      br: false
    }
  ];

}
