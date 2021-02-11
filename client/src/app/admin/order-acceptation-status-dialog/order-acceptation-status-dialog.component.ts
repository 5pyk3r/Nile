import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {OrderService} from '../../core/services/orderService/order.service';
import {Order} from '../../core/model/order';

@Component({
  selector: 'app-order-acceptation-status-dialog',
  templateUrl: './order-acceptation-status-dialog.component.html',
  styleUrls: ['./order-acceptation-status-dialog.component.scss']
})
export class OrderAcceptationStatusDialogComponent implements OnInit {

  deliveryTimeInMinutes: number;
  order: Order;
  id: number;

  constructor(private matDialogRef: MatDialogRef<OrderAcceptationStatusDialogComponent>, private orderService: OrderService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.order = this.data;
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.matDialogRef.close();
  }
}
