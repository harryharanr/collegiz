import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FuseConfigService } from "@fuse/services/config.service";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { FuseNavigation } from "@fuse/types";
import { FuseNavigationItem } from "@fuse/types";

@Component({
    selector: "vertical-layout-1",
    templateUrl: "./layout-1.component.html",
    styleUrls: ["./layout-1.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class VerticalLayout1Component implements OnInit, OnDestroy {
    fuseConfig: any;
    navigation: FuseNavigationItem[];
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.navigation = [
            {
                id: "dashboard",
                title: "Dashboard",
                type: "item",
                url: "/dashboard",
                icon: "keyboard_arrow_right",
            },
            {
                id: "usersmanagement",
                title: "Users Management",
                type: "item",
                url: "/users-management",
                icon: "keyboard_arrow_right",
            },
            {
                id: "rolesmanagement",
                title: "Roles Management",
                type: "item",
                url: "/roles-management",
                icon: "keyboard_arrow_right",
            },
            {
                id: "branchmanagement",
                title: "Branch Management",
                type: "item",
                url: "/branch-management",
                icon: "keyboard_arrow_right",
            },
            {
                id: "departmentmanagement",
                title: "Department Management",
                type: "item",
                url: "/department-management",
                icon: "keyboard_arrow_right",
            },
            {
                id: "studentmanagement",
                title: "Student Management",
                type: "item",
                url: "/student-management",
                icon: "keyboard_arrow_right",
            },
            {
                id: "placementrecords",
                title: "Placement Records",
                type: "item",
                url: "/placement-management",
                icon: "keyboard_arrow_right",
            },
            {
                id: "studentmarks",
                title: "Student Marks",
                type: "item",
                url: "/student-marks",
                icon: "keyboard_arrow_right",
            },
            {
                id: "feesmanagement",
                title: "Fees Management",
                type: "item",
                url: "/fees-management",
                icon: "keyboard_arrow_right",
            },
        ];
        this._fuseNavigationService.register("main", this.navigation);
        this._fuseNavigationService.setCurrentNavigation("main");

        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
