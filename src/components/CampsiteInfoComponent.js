import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
  renderCampsite(campsite){
    return(
      <div className="col-md-5 m-1">
        <Card onClick={() => this.onCampsiteSelect(campsite)}>
          <CardImg width="100%" src={campsite.image} alt={campsite.name} />
          <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    )
  }
  
    renderComments(comments){
      if (comments){
        return(
          <div className="col-md-5 m-1">
            <h4>Comments</h4>
            {comments.map(comments => <div key={comments.id}> 
              <div>
                {comments.text}
              </div>
              <div>
                {comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}
              </div> 
                <br />
              </div>)}
          </div>
        );
      }
    }
  
  render(){
    if(this.campsite){
      return(
        <div className="row">
          {this.renderCampsite(this.campsite)}
          {this.renderComments(this.props.campsite.comments)}

        </div>
      )
    } else {
      return(
        <div>
        </div>
      )
    }
  }
}


export default CampsiteInfo;