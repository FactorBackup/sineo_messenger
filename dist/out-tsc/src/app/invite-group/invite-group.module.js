import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InviteGroupPage } from './components/invite-group.page';
const routes = [
    {
        path: '',
        component: InviteGroupPage
    }
];
let InviteGroupPageModule = class InviteGroupPageModule {
};
InviteGroupPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            SharedModule,
            RouterModule.forChild(routes)
        ],
        declarations: [InviteGroupPage]
    })
], InviteGroupPageModule);
export { InviteGroupPageModule };
//# sourceMappingURL=invite-group.module.js.map