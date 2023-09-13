
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 text-center bg-gray-300 ml-4'>
            <h1 className="text-3xl">bookmarks: {bookmarks.length}</h1>
            <p>Reading Time: {readingTime}</p>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;