const Header = () =>{

    return <h2> Hassan Blog</h2>
}

const Posts = () =>{

    return (
        <div>
            <h3>Post2</h3>
            <p>this post says the significance of Ai</p>
        </div>
    )
}

const Footer = () =>{
    return <h2>Hassan@2026</h2>
}

const Blog =()=> {

    return(
        <div>
            <Header />
               <main>
                <Posts />
               </main>
            <Footer />
        </div>
    )
}
export default Blog