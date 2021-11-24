import { Component, ElementRef, EventEmitter, OnInit , Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  serverElements = [];
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value
      });
  }

  ngOnInit(): void {
  }

}
