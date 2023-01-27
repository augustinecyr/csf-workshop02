import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { animal } from 'src/models/animal';

@Component({
  selector: 'app-animalform',
  templateUrl: './animalform.component.html',
  styleUrls: ['./animalform.component.css']
})
export class AnimalformComponent {
  form: animal = {
    id: 0,
    name: '',
    lifespan: 0
  };

  onSubmit(_t4: NgForm): void {
    console.log('Animal entered: ', _t4.value);
  }

  OnReset(_t7: NgForm) {
    _t7.reset();
  }
}
