/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';


import { CampaignsAll} from '../../../../model/campaign.model';
import { SelectFormElement } from '../../../../shared/formelement/select.formelement';

interface CampaignsCreateState {
    CampaignsObj: CampaignsAll;
}

@inject('campaignstore')
@observer
export class CampaignImageUpload extends React.Component<any, any> {
    render() {        
        
        return (
            <section>
                <Modal isOpen={this.props.campaignstore.modalImageUpload} toggle={this.props.campaignstore.toggleImageUploadModal}>
                    <ModalHeader toggle={this.props.campaignstore.toggleImageUploadModal}>Assets – {this.props.campaignstore.CampaignsObj.Name}</ModalHeader>
                    <ModalBody>

                        <div className="row">
                            <div className="col-md-12">
                                
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="text-primary">
                                            <tr>
                                                <th>Image Thumb</th>
                                                <th>Image URL</th>
                                                <th>Preview</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    {
                                                        this.props.campaignstore.CampaignsObj.Creative.Assets != null ?
                                                            <div>
                                                                {
                                                                    this.props.campaignstore.CampaignsObj.Creative.Assets.map((Items, index) => {                                                                        
                                                                        return (
                                                                            <div style={{ marginBottom: "10px" }} className="demoImage" key={index}><img src={`${process.env.CDN_PATH}exittraffic/${Items.Dimensions}/thumbs/${Items.Url}`} alt="" /></div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            : ""
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        this.props.campaignstore.CampaignsObj.Creative.Assets != null ?
                                                            <div>
                                                                {
                                                                    this.props.campaignstore.CampaignsObj.Creative.Assets.map((Items, index) => {                                                                        
                                                                        return (
                                                                            <div key={index} style={{ height: "50px", lineHeight: "40px" }}>{Items.Url}</div>                                                                           
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            : ""
                                                    }
                                                </td>
                                                <td>
                                                    {
                                                        this.props.campaignstore.CampaignsObj.Creative.Assets != null ?
                                                            <div>
                                                                {
                                                                    this.props.campaignstore.CampaignsObj.Creative.Assets.map((Items, index) => {
                                                                        return (
                                                                            <div style={{ marginBottom: "10px" }} className="demoImage" key={index}>
                                                                                <a href={`${process.env.CDN_PATH}exittraffic/${Items.Dimensions}/${Items.Url}`} className="btn btn-sm btn-primary" target="_blank">Preview</a>                        
                                                                                
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            : ""
                                                    }
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                            </div>                           
                        </div>
                        <div className="divider"></div>

                        <form onSubmit={this.props.campaignstore.handleImageUploadSubmit}>
                            <div className="form_list row">
                                <ul>
                                    <li className="col-md-3">
                                        <div className="form-group">
                                            <div className="form_label">Please select the image size</div>
                                            <SelectFormElement
                                                name={'Dimension'}
                                                placeholder={'Select Image Size'}
                                                controlFunc={this.props.campaignstore.handleImageUploadChange}
                                                options={this.props.campaignstore.Dimension}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        {
                                            this.props.campaignstore.DimensionSelected == "" ? <div className="disabled"><span className="btn btn-rose btn-round btn-file" style={{ float: "left", marginTop: "36px" }}>
                                                <span className="fileinput-new">Select image</span>
                                                    <input name="Url" type="file" onChange={this.props.campaignstore._handleImageChange} />
                                                </span>
                                                <div className="creative_Preview"><img src={this.props.campaignstore.CreativePreview} /></div></div> : <div><span className="btn btn-rose btn-round btn-file" style={{ float: "left", marginTop: "36px" }}>
                                                    <span className="fileinput-new">Select image</span>
                                                    <input name="Url" type="file" onChange={this.props.campaignstore._handleImageChange} />
                                                </span>
                                                <div className="creative_Preview"><img src={this.props.campaignstore.CreativePreview} /></div></div>
                                        }
                                                                               
                                    </li>
                                </ul>                                
                               </div>
                            <div className="divider"></div>
                            <button type="submit" style={{ marginLeft: '10px' }} className="btn btn-success pull-right">Save changes</button>
                            <button type="button" className="btn btn-info pull-right" onClick={this.props.campaignstore.toggleImageUploadModal}>Close</button>                             
                            
                          </form>                                   
                        
                    </ModalBody>
                    <ModalFooter>
                        
                    </ModalFooter>
                </Modal>                
                                 
            </section>
        )
    }

}

