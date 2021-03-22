import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout'
import { MyPost } from '../../interfaces/post'

export default function About ({title}) {

    const onClickHandler = () => {
        Router.push('/')
    }
    return(
        <MainLayout title={'About page'}>
            <h1>{title}</h1>
            <button onClick={onClickHandler}>Go back to Home</button>
            <button onClick={() => Router.push('/posts')}>Go to Posts</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`)
    const data:MyPost = await response.json()

    return {
        title: data.title
    }
}
