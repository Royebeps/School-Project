import '../src/styles/about.css';

function About(){
const introText="Welcome To SOLIS"
const introPara="Our vision at TIMES2 Academy is to set the standard for K-12 education in the twenty-first century. TIMES2 is an amazing school where you can excel in academics and also build friendships that will last a lifetime.TIMES2 is the only K-12 STEM School in Rhode Island. This drives us even more to begin with the end in mind, and prepare students for life-long success and careers of impact."
const introPara2="The mission of TIMES² Academy is to develop intellectually curious and capable young people who are selfless contributors to both local and global communities, and who aspire to be ethical and compassionate leaders. Through a rigorous and innovative academic program in math, science, and technology, in combination with the liberal arts, TIMES² Academy affords its diverse student population those experiences, skills, and values that will prepare them for purposeful contributions in higher education and STEM-related fields"   

return(
    <section>
        <div className='about-container'>
            <div className="p-about">{introText}</div> 
            <div className="p-about">{introPara}</div>
            <div className="p-about">{introPara2}</div>
            <div className="p-about">{""}</div>
            <div className="p-about">{introPara2}</div>
            <div className="p-about">{"About Us"}</div>
        </div>

        <div className='about-box-container'>
            <div className="three-box">{"nursery level"}</div>
            <div className="three-box">{"primary level"}</div>
            <div className="three-box">{"secondary level"}</div>
</div>


        </section> 
    )
}
export default About;