import PostLink from "../components/PostLink";
import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
var slugify = require('slugify')

const Index = ( props ) => {

	const { posts } = props;

	return (
		<div>
      <Layout></Layout>
      <div className='container py-3'>
        
          { posts.length && (
            <div className='row'>            
              { posts.map( item => (
                <PostLink key={item.id} id={ item.id } slug={ slugify(item.title) } title={ item.title }  imgurl={item.thumbnailUrl}/>
              ) ) }
            </div>
          ) }
        
      </div>
		</div>
	)
};

Index.getInitialProps = async () => {
	const res = await fetch( 'https://jsonplaceholder.typicode.com/photos?_limit=50' );
	const postsData = await res.json();

	return {
		posts: postsData
	}
};

export default Index;