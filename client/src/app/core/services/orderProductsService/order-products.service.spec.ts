import { TestBed } from '@angular/core/testing';

import { OrderProductsService } from './order-products.service';

describe('OrderProductsService', () => {
  let service: OrderProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
