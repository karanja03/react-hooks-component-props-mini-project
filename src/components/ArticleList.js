import React from "react";
import Article from "./Artricle";
 function ArticleList({posts}){
    return(
        <main>
        {posts.map((post)=>(
            
            <span key={post.id}>
                <Article  title ={post.title} date={post.date} preview={post.preview}/>
            </span>
    
 ))}

        </main>
    )
 }
 export default ArticleList;