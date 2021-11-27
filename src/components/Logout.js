import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from '../redux/userSlice';
import './Logout.css'
import NavBar from './NavBar';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from '../redux/postSlice';
import { imagesAdded, imagesDeleted } from '../redux/imagesSlice';


const Logout = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    };
    

    //add a post
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content,
                })
            )
            setTitle('')
            setContent('')
        }
    };
    const posts = useSelector((state) => state.posts);
    const renderedPosts = posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ));


    //add an image
    const [imageUrl, setimageUrl] = useState('');
    const onImgChanged = (e) => setimageUrl(e.target.value)
    const onAddClicked = (e) => {
        e.preventDefault();
                dispatch(
                    imagesAdded({
                        id: nanoid(),
                        imageUrl,
                    })
                )
            setimageUrl("")
    };

    const images = useSelector((state) => state.images);
    const rederedImages = images.map((image) => (
        <span key={image.id} className="topdv">
            <img className="logimg" src={image.imageUrl} alt="" />
            <button className="dlbtn" onClick={() => {dispatch(imagesDeleted(image.id))}}>X</button>
        </span>
    ));

    const [add, setAdd] = useState(false);
    return (
        <div className="logout">
            <div className="logheader">
                <NavBar />
            <h1><span className="user__name">{user.name}</span> 's image collection and posts</h1>
            <button className="logout__button" onClick={(e) => handleLogout(e)}>Logout</button>
            </div>
            <div className="img-content">
                <h1>Your images collection</h1>
                <button className="add-img-btn" onClick={() => setAdd(true)}>Add new image</button>
                {add ? <div className="open-add">
                    <button className="close5" onClick={() => setAdd(false)}>X</button>
                    <form>
                    <p>Enter your image's url</p>
                    <input type="url" onChange={onImgChanged}/>
                    <button className="button55" type="submit" onClick={onAddClicked}>ADD</button>
                    </form>
                </div> : null}
                <div>{rederedImages}</div>
            </div>
        <div className="postsec">
            <div className="bc-div"></div>
            <h2>Add a New Post</h2>
            <form>
            <p>Post title</p>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
            />
            <p>Content</p>
            <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            /><br />
            <button className="button" type="button" onClick={onSavePostClicked}>
                Save Post
            </button>
            </form>
        </div>
            <div className="renPost">
                <h2>Posts</h2>
                <div className="p5">
                {renderedPosts}
                </div>
            </div>
        </div>
    )
}

export default Logout
