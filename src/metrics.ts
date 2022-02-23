import { Counter } from 'prom-client'


export const notFoundCounter = new Counter({
    name: 'not_found',
    help: 'Antall requests som resulterte i 404'
})

export const errorCounter = new Counter({
    name: 'error',
    help: 'Antall requests som resulterte i 505'
})

export const successCounter = new Counter({
    name: 'success',
    help: 'Antall requests returnerte data ok'
})

export const cacheHitCounter = new Counter({
    name: 'cache_hit',
    help: 'Antall requests returnerte data fra cache'
})


export const cacheMissCounter = new Counter({
    name: 'cache_miss',
    help: 'Antall requests returnerte data fra bucketen'
})
