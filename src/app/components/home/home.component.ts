import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TasksService } from 'src/app/services/tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = {};
  constructor(
    private taskservice:TasksService,
    private _snackBar: MatSnackBar
  ) { }

  options: any = {
    confirmBtnClass: 'btn btn-success', 
    confirmBtnText: 'Confirm',      
    cancelBtnClass: 'btn btn-danger',   
    cancelBtnText: 'Cancel',      
    modalSize: 'lg',      		
    modalClass: ''      			
   }
   
  ngOnInit() {
    this.getWorks();
  }

  openSnackBar(message:string) {
    this._snackBar.open(message,'OK',{
      duration: 2000
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.updateWork();
  }

  addWork(Work){
    const obj = {todo: Work.value};
    this.taskservice.addTask(obj)
    .subscribe((res:any) => {
      this.openSnackBar(res.message);
      this.getWorks();
      Work.value = '';
    },(err) => {
      console.log(err);
    })
  }

  getWorks(){
    this.taskservice.getTasks()
    .subscribe((res) => {
      Object.keys(res).forEach((key)=>{
        this.data[key] = res[key];
      });
    },(err) => {
      console.log(err);
    })
  }

  updateWork(){
    this.taskservice.updateTask(this.data)
    .subscribe((res)=>{
      this.getWorks();
    },(err)=>{
      console.log(err);
    })
  }

  removeWork(id){
    this.taskservice.deleteTask(id)
    .subscribe((res:any)=>{
      setTimeout(() => {
        this.openSnackBar(res.message);
      }, 1200);
      this.getWorks();
    },(err)=>{
      console.log(err);
    })
  }

}
