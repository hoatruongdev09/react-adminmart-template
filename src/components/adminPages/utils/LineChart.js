function LineChart() {
    return (
        <div class="card">
            <div class="card-body">
                <div class="d-flex align-items-start">
                    <h4 class="card-title mb-0">Earning Statistics</h4>
                    <div class="ml-auto">
                        <div class="dropdown sub-dropdown">
                            <button class="btn btn-link text-muted dropdown-toggle" type="button"
                                id="dd1" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i data-feather="more-vertical"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                                <a class="dropdown-item" href="#">Insert</a>
                                <a class="dropdown-item" href="#">Update</a>
                                <a class="dropdown-item" href="#">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pl-4 mb-5">
                    <div class="stats ct-charts position-relative" style={{ height: "315px" }}></div>
                </div>
                <ul class="list-inline text-center mt-4 mb-0">
                    <li class="list-inline-item text-muted font-italic">Earnings for this month</li>
                </ul>
            </div>
        </div>
    )
}

export default LineChart
