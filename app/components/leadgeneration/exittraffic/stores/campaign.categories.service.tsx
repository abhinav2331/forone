/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import * as axios from "axios";
import { extendObservable, observable, action } from "mobx";
import { get, post } from '../../../../shared/api.service';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';


export class CampaignCategory {    

    IsNotifyCatCreateError: boolean;
    CatCreatErrore: any;
    CampaignCategoryIsInEditMode: boolean;
    CatEditStatus: {};
    CategoryIDEdit: any;
    CategoryID: any;
    _rowCatEditorPopup(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    IsNotifyCatCreate: boolean;
    IsNotifyCatEdit: boolean;
    getAllCategory(): any {
        throw new Error("Method not implemented.");
    }
    loading: boolean;
    modalCategoryCreate: boolean;
    modalCategoryEdit: boolean;
    Categories: {};
    CategoryObj: {};
    CatCreateStatus: {};
    constructor() {
        extendObservable(this, {            
            Categories: [], 
            loading: false,            
            modalCategoryEdit: false,
            CategoryObj: {},
            CatCreateStatus: [],
            CatEditStatus: [],
            IsNotifyCatCreate: false,
            IsNotifyCatEdit: false,
            CategoryIDEdit: '',
            CategoryID: '',
            CampaignCategoryIsInEditMode: false,
            CatCreatErrore: '',
            IsNotifyCatCreateError: false,

            //Mobx Actions  
            getAllCategory: action(() => {
                this.loading = true;
                get("leadgeneration/categories")
                    .then(response => {                        
                        this.Categories = response;
                        this.loading = false;
                    }).catch(error => {
                        console.log(error)
                    });
            }),
            toggleCategoryCreateModal: action(() => {
                this.modalCategoryCreate = !this.modalCategoryCreate;
            }),
            toggleCategoryEditModal: action(() => {
                this.modalCategoryEdit = !this.modalCategoryEdit;
            }),
            
            handleNormalChange: action((e: any) => {
                var levels = e.target.name.split('_');
                var value = e.target.value;                

                var obj = this.CategoryObj;

                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }

                obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
            }),

            //Category Create
            showCategoryCreateModal: action((e: any) => {
                this.CampaignCategoryIsInEditMode = false;
                this.modalCategoryEdit = !this.modalCategoryEdit; 
                this.CategoryObj = {};
            }),
                       

            // Category Edit
            _rowCatEditorPopup: action((row, index) => {
                debugger;
                this.CategoryID = row.CategoryID;
                this.CampaignCategoryIsInEditMode = true;
                get('leadgeneration/categories/' + this.CategoryID).then(response => {
                    this.modalCategoryEdit = !this.modalCategoryEdit,
                        this.CategoryObj = response;
                    console.log(response);
                });
            }),
            buttonCatEditFunction: action((cell, row, index) => {
                return (
                    <div className="actionsBtn">                        
                        <button type="button" data-toggle="modal" data-target="#catEdit" onClick={index => { this._rowCatEditorPopup(row, index); }} className="btn tooltipC btn-success">
                            <i className="material-icons">edit</i> <span className="tooltiptext">Edit</span>
                        </button>
                    </div>
                );
            }),
            
            handleSubmitCategory: action((event: any) => {
                event.preventDefault();
                if (this.CampaignCategoryIsInEditMode == false) {
                    post("leadgeneration/categories/create", this.CategoryObj)
                        .then(response => {                            
                            console.log(response);                            
                            this.CatCreateStatus = response;
                            this.modalCategoryEdit = false;
                            this.IsNotifyCatCreate = !this.IsNotifyCatCreate;
                        }).catch(error => {
                            console.log(error);
                            this.CatCreatErrore = error;
                            this.modalCategoryEdit = false;
                            this.IsNotifyCatCreateError = !this.IsNotifyCatCreateError;
                        });
                    this.getAllCategory();
                }
                else {
                    post("leadgeneration/categories/" + this.CategoryID + "/update", this.CategoryObj)
                        .then(response => {
                            alert(2);
                            console.log(response);
                            this.CatEditStatus = response;
                            this.modalCategoryEdit = false;
                            this.IsNotifyCatEdit = !this.IsNotifyCatEdit;
                        }).catch(error => {
                            console.log(error);
                        });
                }
            }),

            
        })
    }
}
