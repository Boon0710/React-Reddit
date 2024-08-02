function Logo() {
    return (
        <div className="flex">
            <img src="redditFace.svg" alt="redditFace"  className="h-[30px]"/>
            <img src="redditText.svg" alt="redditText" className="h-[46px] hidden md:block"/>
        </div>
    )
}

export default Logo

