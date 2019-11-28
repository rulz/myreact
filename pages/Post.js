import fetch from 'isomorphic-unfetch';
import Layout from "../components/Layout";

const Post = ( props ) => {
	const { post } = props;

	return (        
        <div>
            <Layout></Layout>
            <div className='container py-3'>
                <div className='row'>
                    <div className='col-12'>
                        <div className="card mb-4 shadow-sm">
                            <img src={`${ post.thumbnailUrl }`}/>
                            <div className="card-body">
                                { post.title }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
};

Post.getInitialProps = async ( context ) => {

    const postId = context.query.id;
    
    const res = await fetch( `https://jsonplaceholder.typicode.com/photos/${ postId }` );
	//const res = await fetch( `http://codeytek.com/wp-json/wp/v2/posts/${ postId }` );
	const postData = await res.json();

	return {
		post: postData
	}
};

export default Post;