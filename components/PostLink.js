import Link from 'next/link';
const PostLink = ( props ) => {
	return(
		<div className='col-4'>
            <div className="card mb-4 shadow-sm">
                <img src={`${ props.imgurl }`}/>
                <div className="card-body">
                    <Link as={`/p/${ props.id }-${ props.slug }`} href={`/post?id=${props.id}`}>
                        <a>{ props.title }</a>
                    </Link>
                </div>
            </div>
		</div>
	)
};

export default PostLink;