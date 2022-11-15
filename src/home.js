import Footer from './footer'
import {Link} from 'react-router-dom'
import './home.css'

function Home(){
  return(
   <div className="bodyContainer">
      <Info />
      <Links />
      <Icons />
      <Footer />
   </div>
  )
}

const Info = () => {
    return (
        <div className='home-header'>
            <div className='icon-nav'>
                <img
                    className='nav-icon'
                    src='https://s3-alpha-sig.figma.com/img/f609/e830/b3cc2cdbedc050d400655c67cc61444f?Expires=1668384000&Signature=MR1jsw1A-W3MRUW2QywtbhQ8V9cUD30CqhYiPq2JD9gZQev2Ho~kGoMqkXcMfiKCXrlgARlHTlxc~j86e5BDug87EQzJ7Wqj2UQ3tEXb1npu-Ftfy61T1J6eusD7zF~1U7nIrJ5CdvLo4GI4lycL8sifdaSOahJi88FIeynTxtsR3s4wkW-Vg~JtR8s4WHtd-uqYmT1FPWwcrjqV4ncSnzb2umT5QkwKTG6-temn1VRuwl2QWI4X0MD3jXPTAyfndsVv4THRf~S7qu8RqUcZl1vg49usS0nMCdUQW0qToUiN9Rmt~sId5rEB7kzAd7FxUFHeuUudiOpnoBpLKN9-Mg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                    alt='nav icon'
                />
            </div>
            <img
                id='profile__img'
                src='https://pbs.twimg.com/profile_images/1537699315459694593/BV0yaXx5_400x400.jpg'
                alt='display'
            />
            <h1 className='name'>@Demand</h1>
            <p id='slack' className='hidden'>
                Demand
            </p>
        </div>
    )
}


function Links(){

     return (
         <div className='btnContainer'>
             <a
                 href='https://twitter.com/Demandtvs/'
                 className='btn'
                 id='twitter'
             >
                 Twitter Link
             </a>
             <a
                 href='https://training.zuri.team'
                 className='btn'
                 id='btn__zuri'
             >
                 Zuri Team
             </a>
             <a
                 href='http://books.zuri.team'
                 className='btn'
                 id='books'
             >
                 Zuri Books
             </a>
             <a
                 href='https://books.zuri.team'
                 className='btn'
                 id='book__python'
             >
                 Python Books
             </a>
             <a
                 href=' https://background.zuri.team'
                 className='btn'
                 id='pitch'
                 title='Proper background check on all our candidate'
             >
                 Background Check for coders
             </a>
             <a
                 href='https://books.zuri.team/design-rules'
                 className='btn'
                 id='book__design'
                 title='Get your latest design books'
             >
                 Desin Book
             </a>
             <Link
                className='btn'
                id='contact'
                to='./contact'
            >
                Contact Me
            </Link>
         </div>
     )
 
}

const Icons = () => {
    return (
        <div className='icons-wrapper'>
            <img
                className='slack'
                src='https://s3-alpha-sig.figma.com/img/03d7/a544/d24fed9c3ea9dff93c76e5c8428b7661?Expires=1667779200&Signature=Becx6iNHoW0G9vjxVqSQaoWpJo0iNF9vRRVhyO64ccKrEbZ25Ho3WejZaWnFeh7Nga0BBUnwWHQEt3HU3vGg16Y~nf57SI1675bafaBSnVdvARqkZfyczW6BQHK6BlWs5LSh~NILK2UBN8wZjl6k5bSvWFf4WI7EM3wlozLVtmRzR-qWg1~5HzfpiZhvBO4MT3K8zgkKmMFs4eoWVtTI6RH3TUPLiJL2g~ROm4pgjlmaFSQF6UqFOD6rpva3Iwn4bX7C4NuMTiZHEIJaw5JsEahHhC5fIcSZjce2CzxRk1GdkCHmcSQPoi07fI4eaxi18eSMiLoVkn-EHFKgMUvkyg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                alt='slack logo'
            />
            <img
                className='github'
                src='https://s3-alpha-sig.figma.com/img/8998/0a2c/52eac4e987c99a8ebf4e54cea12cff9d?Expires=1667779200&Signature=DjfKl44f0KXasjMnk0eBNXliybThZvV1R2tvp~Y2QSwgfyCHC2w361-OzCcKKF6IGy1H4twKEOwTchPqOdY5fqLHdfFHuvSrh3Kmx-A5dkfxooBaMPxjybtrRJwKZnMqksPmRCpJTPcPUedSM1VtUtASWpM1SqsCLwjJKNb8ZcBr1-7Q-Dj9xzNX7S67LGY5eitRub5DLBys4IjnCX2jAI5OYuhrYNxyjxIxXF5rjJFMVypWZueEmK3nrkyGD~T6mfBFFEyRSmbtzT1YAHQ0VDXL66~Zogb3jS5ZTX~6wbiD4RGU54bisLQhomNLF4TUb7J~uthhKXkJmycdZRq5yQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
                alt='github logo'
            />
        </div>
    )
}



export default Home