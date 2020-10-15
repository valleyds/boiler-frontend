import React from 'react'
//import getJobs from '../Services/Jobs'
import api from '../Services/Api'

export default class JobHistory extends React.Component {
    
    state = {
        jobs: []
    }

    componentDidMount() {
      api.get('jobs').then(res => {
        const jobs = res.data.jobs;
        this.setState({ jobs });
      })
    }

    render() {
        return (
          <ul>
            { this.state.jobs.map(job => <li key={job.id}>{job.company} - {job.title}</li>)}
          </ul>
        )
      }

}