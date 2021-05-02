// import dependencies
import React from 'react'

// import react-testing methods
import { render, waitFor, screen, findByTestId, fireEvent } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import Image from './Image'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import MockAdatper from 'axios-mock-adapter'
import axios from 'axios'

const mock = new MockAdatper(axios)

describe('Image', () => {
    beforeEach(() => {
        mock.onGet("https://api.richey.tech/wp-json/wp/v2/media/182")
            .reply(200, 
                {"id":182,"date":"2017-05-24T01:46:06","date_gmt":"2017-05-24T01:46:06","guid":{"rendered":"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823.jpg"},"modified":"2017-05-24T01:46:06","modified_gmt":"2017-05-24T01:46:06","slug":"17c60f057823","status":"inherit","type":"attachment","link":"https:\/\/api.richey.tech\/17c60f057823\/","title":{"rendered":"17c60f057823"},"author":1,"comment_status":"open","ping_status":"closed","template":"","meta":[],"acf":[],"description":{"rendered":"<p class=\"attachment\"><a href='https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823.jpg'><img width=\"300\" height=\"177\" src=\"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823-300x177.jpg\" class=\"attachment-medium size-medium\" alt=\"\" loading=\"lazy\" srcset=\"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823-300x177.jpg 300w, https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823-768x453.jpg 768w, https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823-1024x604.jpg 1024w, https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823.jpg 1402w\" sizes=\"(max-width: 300px) 100vw, 300px\" \/><\/a><\/p>\n"},"caption":{"rendered":""},"alt_text":"","media_type":"image","mime_type":"image\/jpeg","media_details":{"width":1402,"height":827,"file":"2017\/05\/17c60f057823.jpg","sizes":{"thumbnail":{"file":"17c60f057823-150x150.jpg","width":150,"height":150,"mime_type":"image\/jpeg","source_url":"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823-150x150.jpg"},"medium":{"file":"17c60f057823-300x177.jpg","width":300,"height":177,"mime_type":"image\/jpeg","source_url":"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823-300x177.jpg"},"medium_large":{"file":"17c60f057823-768x453.jpg","width":768,"height":453,"mime_type":"image\/jpeg","source_url":"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823-768x453.jpg"},"large":{"file":"17c60f057823-1024x604.jpg","width":1024,"height":604,"mime_type":"image\/jpeg","source_url":"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823-1024x604.jpg"},"full":{"file":"17c60f057823.jpg","width":1402,"height":827,"mime_type":"image\/jpeg","source_url":"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823.jpg"}},"image_meta":{"aperture":"0","credit":"","camera":"","caption":"","created_timestamp":"0","copyright":"","focal_length":"0","iso":"0","shutter_speed":"0","title":"","orientation":"0","keywords":[]}},"post":null,"source_url":"https:\/\/api.richey.tech\/wp-content\/uploads\/2017\/05\/17c60f057823.jpg","_links":{"self":[{"href":"https:\/\/api.richey.tech\/wp-json\/wp\/v2\/media\/182"}],"collection":[{"href":"https:\/\/api.richey.tech\/wp-json\/wp\/v2\/media"}],"about":[{"href":"https:\/\/api.richey.tech\/wp-json\/wp\/v2\/types\/attachment"}],"author":[{"embeddable":true,"href":"https:\/\/api.richey.tech\/wp-json\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"https:\/\/api.richey.tech\/wp-json\/wp\/v2\/comments?post=182"}]}}
            )
    })

    test('ensure loader shows instead of requesting image if not visible', async () => {
        render(<Image mediaID={182} size={"large"} />)

        mockAllIsIntersecting(false)
        expect(await screen.findByTestId('loader')).toBeInTheDocument()
    })
    
    test('fetch image from API', async () => {
        const image = "https://api.richey.tech/wp-content/uploads/2017/05/17c60f057823-1024x604.jpg"
        render(<Image mediaID={182} size={"large"} />)

        mockAllIsIntersecting(true)
        expect(await screen.findByTestId('loaded-image')).toHaveAttribute('src', image)
    })

    test('direct load an image src', async () => {
        const image = "https://placeholder-image-here.com/image.jpg"
        render(<Image directSource={image} />)

        mockAllIsIntersecting(true)
        expect(await screen.findByTestId('loaded-image')).toHaveAttribute('src', image)
    })
})