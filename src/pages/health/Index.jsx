import React, { useEffect, useState } from 'react'
import Ad from '../../components/common/Ad'
import SideNews from '../../components/news/SideNews'
import MiddleNews from '../../components/news/MiddleNews'
import Contact from '../../components/common/Contact'
import axios from 'axios'

const Health = () => {

  const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`https://news-backend-02vi.onrender.com/api/health`)
            .then(res=>{
                setData(res.data.articles)
            })
            .catch(err=>console.log(err))
    }, [])

    const length = data.length;
    const finalLength = Math.round(length/3)

  return (
    <div className="grid sm:grid-cols-2 place-content-center lg:grid-cols-responsive min-[1380px]:grid-cols-homePage divide-x divide-stone-500 py-4">
            <div className=' flex flex-col items-center justify-start'>
                {
                    data.map((news, i)=>{
                        if(i<finalLength){
                                // console.log("left ", i);
                                return <SideNews
                                            title= {news.title}
                                            description={news.description}
                                            image={news.urlToImage}
                                            url={news.url}
                                        />
                        }
                    })
                }
            </div>
            <div className=' hidden lg:flex flex-col items-center justify-start'>
                {
                    data.map((news, i)=>{
                        if((i>=finalLength) && (i<(finalLength+finalLength-1))){
                            // console.log("middle ", i);
                            return <MiddleNews
                                        title= {news.title}
                                        description={news.description}
                                        image={news.urlToImage}
                                        url={news.url}
                                    />
                        } 
                    })
                }
                <Contact/>
            </div>
            <div className=' hidden lg:hidden min-[1380px]:flex sm:flex flex-col items-center justify-start'>
            {
                    data.map((news, i)=>{
                        if(i>=(finalLength+finalLength-1)){
                            // console.log("right ", i);
                            return <SideNews
                                    title= {news.title}
                                    description={news.description}
                                    image={news.urlToImage}
                                    url={news.url}
                                />
                        } 
                    })
                }
            </div>
        </div>
  )
}

export default Health