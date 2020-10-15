import instance from './Api'

export const getJobs = () => {
    return instance.get('jobs')
}

export default instance