import type { Route } from './+types/home'
import { Hero } from '~/components/layout/hero'
import React from 'react'
import { Feature } from '~/components/layout/feature'
import { Pricing } from '~/components/layout/pricing'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Research React Router' },
        { name: 'description', content: 'Welcome to Research React Router!' },
    ]
}

export default function Home() {
    return (
        <div>
            <Hero />
            <Feature />
            <Pricing />
        </div>
    )
}
