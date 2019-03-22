import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'product',
                loadChildren: './product/product.module#StoreProductModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice/invoice.module#InvoiceInvoiceModule'
            },
            {
                path: 'notification',
                loadChildren: './notification/notification/notification.module#NotificationNotificationModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreEntityModule {}
