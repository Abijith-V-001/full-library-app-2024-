import React from 'react'

const Viewall = () => {
  return (
    <div>
        <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-col-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Published year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                               
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Viewall