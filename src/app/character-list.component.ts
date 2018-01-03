
import {Component} from "@angular/core";

@Component({
  selector: 'character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  characters = [
    {name: 'C-3P0'},
    {name: 'R2-D2'},
    {name: 'Han Solo'},
    {name: 'Luke Skywalker'},
    {name: 'Leia Organa'},
    {name: 'Obi Wan Kenobi'},
    {name: 'Darth Vader'},
    {name: 'Chewbacca'}
  ];
}

