import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover, reading_time, author, author_img, postDate, hash_tag} = blog;

    return (
        <div>
            <img src={cover} alt={`cover picture ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} />
                    <div className='ml-6'>
                        <h4 className='text-2xl'>{author}</h4>
                        <p>{postDate}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p><span>{hash_tag}</span></p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;