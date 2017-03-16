import React from 'react';


class Post extends React.Component {
  // var imageUrl = "./src/img/projects";
  // var png = "png";
  render(){
    return (
  //  <div className="ContestPreview">
  //    <div className="posts-image">
  //      <img src="./src/img/projects{this.props.image}"/>
  //    </div>
  //    <div className="posts-name">
  //      Name: {this.props.name}
  //    </div>
  //    <div className="posts-details">
  //      Desc: {this.props.description}
  //    </div>
   //
  //    Features: {this.props.features}
  //    <div className="posts-links">
  //      Url: {this.props.url}
  //      GH: {this.props.github}
  //    </div>
  //  </div>
   <dl className="Posts">
     <dd>Image</dd>
     <dt><img src="../src/img/projects{this.props.image}.png" /></dt>

     <dd> Name:</dd>
     <dt>{this.props.name}</dt>

     <dd> Desc::</dd>
     <dt> {this.props.description}</dt>

     <dd> Features:</dd>
     <dt> {this.props.features}</dt>

     <dd> Url: </dd>
     <dt> {this.props.url}</dt>

     <dd> GH: </dd>
     <dt> {this.props.github} </dt>

   </dl>
  )
 }
}
export default Post;
