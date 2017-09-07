import config from './config';

const fetchBy = (type, param, cb) => {
  switch (type) {
    case 'query':
      fetchByQuery(param.query, cb)
      break;
    case 'pageToken':
      fetchByPage(param.query, param.pageToken, cb)
      break;
    default:

  }
}

const fetchByQuery = (query, cb) => {
  fetch(`${config.API_URL}/search?maxResults=${config.MAX_RESULTS}&part=snippet&q=${query}&key=${config.API_KEY}`).then(
    (resp) => resp.json()
  ).then(
    (json) => cb({ query, data: json })
  )
}

const fetchByPage = (query, pageToken, cb) => {
  fetch(`${config.API_URL}/search?pageToken=${pageToken}&maxResults=${config.MAX_RESULTS}&part=snippet&q=${query}&key=${config.API_KEY}`).then(
    (resp) => resp.json()
  ).then(
    (json) => cb({ data: json })
  )
}

export {
  fetchBy
}
