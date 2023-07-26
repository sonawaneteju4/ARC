import React from "react";

const AddAddress = () => {
  return (
    <div className="bg-white text-black rounded-xl w-96 py-2">
      <p className="text-center text-xl font-semibold py-2">Add Address</p>
      <hr />
      <form  className="w-full max-w-sm">
        <div className="mx-4 py-1 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="line 1"
          >
            Line1
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Line 1"
            name="line1"
            type="text"
            placeholder="Line 1"
          />
        </div>
        <div className="mx-4 py-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="line 1"
          >
            Line 2
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Line 1"
            name="line2"
            type="text"
            placeholder="Line 1"
          />
        </div>
        <div className="flex">
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="line 1"
            >
              City
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Line 1"
              type="text"
              name="city"
              placeholder="City"
            />
          </div>
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="line 1"
            >
              State
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Line 1"
              type="text"
              name="state"
              placeholder="State"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="line 1"
            >
              Pin Code
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Line 1"
              type="text"
              name="pincode"
              placeholder="101010"
            />
          </div>
          <div className="mx-4 py-1">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="line 1"
            >
              Phone
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Line 1"
              type="text"
              name="phone"
              placeholder="8080080808"
            />
          </div>
        </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Address Type
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="addType"
              >
                <option v<!doctype html>
                <html lang="en">
                
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  <meta name="description" content="">
                  <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
                  <meta name="generator" content="Hugo 0.72.0">
                  <title>Album example · Bootstrap</title>
                
                  <link rel="canonical" href="https://v5.getbootstrap.com/docs/5.0/examples/album/">
                
                
                
                  <!-- Bootstrap core CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
                
                  <style>
                    .bd-placeholder-img {
                      font-size: 1.125rem;
                      text-anchor: middle;
                      -webkit-user-select: none;
                      -moz-user-select: none;
                      -ms-user-select: none;
                      user-select: none;
                    }
                
                    @media (min-width: 768px) {
                      .bd-placeholder-img-lg {
                        font-size: 3.5rem;
                      }
                    }
                  </style>
                
                
                </head>
                
                <body>
                
                  <header>
                    <div class="collapse bg-dark" id="navbarHeader">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-8 col-md-7 py-4">
                            <h4 class="text-white">About</h4>
                            <p class="text-muted">Add some information about the album below, the author, or any other background
                              context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off
                              to some social networking sites or contact information.</p>
                          </div>
                          <div class="col-sm-4 offset-md-1 py-4">
                            <h4 class="text-white">Contact</h4>
                            <ul class="list-unstyled">
                              <li><a href="#" class="text-white">Follow on Twitter</a></li>
                              <li><a href="#" class="text-white">Like on Facebook</a></li>
                              <li><a href="#" class="text-white">Email me</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="navbar navbar-dark bg-dark shadow-sm">
                      <div class="container">
                        <a href="#" class="navbar-brand d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="mr-2"
                            viewBox="0 0 24 24">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" /></svg>
                          <strong>Album</strong>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
                          aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                      </div>
                    </div>
                  </header>
                
                  <main>
                
                    <section class="py-5 text-center container">
                      <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                          <h1 class="font-weight-light">Album example</h1>
                          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator,
                            etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                          <p>
                            <a href="#" class="btn btn-primary my-2">Main call to action</a>
                            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
                          </p>
                        </div>
                      </div>
                    </section>
                
                    <div class="album py-5 bg-light">
                      <div class="container">
                
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col">
                            <div class="card shadow-sm">
                              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg"
                                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" role="img" focusable="false">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                                  dy=".3em">Thumbnail</text>
                              </svg>
                
                              <div class="card-body">
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                                  content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                  <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                  </div>
                                  <small class="text-muted">9 mins</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                
                  </main>
                
                  <footer class="text-muted py-5">
                    <div class="container">
                      <p class="float-right mb-1">
                        <a href="#">Back to top</a>
                      </p>
                      <p class="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                      <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a
                          href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
                    </div>
                  </footer>
                
                </body>
                
                </html>>Default</option>
                <option>Home</option>
                <option>Other</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        <div className="flex justify-end">
          <button className="bg-black text-white px-2 py-2 mr-2 rounded-xl">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default AddAddress;
