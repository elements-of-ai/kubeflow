import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TolerationGroup, AffinityConfig } from 'src/app/types';

@Component({
  selector: 'app-form-affinity-tolerations',
  templateUrl: './form-affinity-tolerations.component.html',
  styleUrls: ['./form-affinity-tolerations.component.scss'],
})
export class FormAffinityTolerationsComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() tolerationGroups: TolerationGroup[];
  @Input() affinityConfigs: AffinityConfig[];

  public vendorsNums = {};
  public vendorinfo = "";
  public gpusType = [];

  constructor(public backend: JWABackendService) {}

  ngOnInit() {
    this.backend.getGPUCount().subscribe(count => { 
      this.vendorsNums = new Object(count);
      (Object.keys(this.vendorsNums)).forEach((key) => {
        this.vendorinfo += this.vendorsNums[key] + ' ' + key;
        this.gpusType.push(key);
      });
      
    });
    
  }
}
