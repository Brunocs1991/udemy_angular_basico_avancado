import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [NewComponentComponent, InputComponent],
  imports: [CommonModule],
  exports: [NewComponentComponent, InputComponent],
})
export class SharedModule {}
