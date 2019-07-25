import React from 'react';
import axios from 'axios';
class Contact extends React.Component {
    state= {
       posts: []
    }
    componentDidMount() {
       // fetch('https://jsonplaceholder.typicode.com/posts')
        //.then(response=> response.json())
        //.then(responseData => {
          //  this.setState({
            //    posts:responseData
            //})
            //console.log(this.state.posts)
        //})
        //.catch(error => {
          //  console.log('error fethcing data', error);
        //});

        axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                posts : response
            })
            console.log(response);
        })
        .catch(error => {
           console.log('error fethcing data', error);
        });
    }
render() {
    return <div className="App">
      {this.state.posts.map(post=> (
          <li key={post.id}>{post.title}</li>
      )
          
      )}
    </div>

}

}
export default Contact;