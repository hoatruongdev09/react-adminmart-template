function BarChart() {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title mb-4">Earning by Location</h4>
                <div class="" style={{ height: "180px" }}>
                    <div id="visitbylocate" style={{ height: "100%" }}></div>
                </div>
                <div class="row mb-3 align-items-center mt-1 mt-5">
                    <div class="col-4 text-right">
                        <span class="text-muted font-14">India</span>
                    </div>
                    <div class="col-5">
                        <div class="progress" style={{ height: "5px" }}>
                            <div class="progress-bar bg-primary" role="progressbar" style={{ width: "100%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-3 text-right">
                        <span class="mb-0 font-14 text-dark font-weight-medium">28%</span>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-4 text-right">
                        <span class="text-muted font-14">UK</span>
                    </div>
                    <div class="col-5">
                        <div class="progress" style={{ height: "5px" }}>
                            <div class="progress-bar bg-danger" role="progressbar" style={{ width: "74%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-3 text-right">
                        <span class="mb-0 font-14 text-dark font-weight-medium">21%</span>
                    </div>
                </div>
                <div class="row mb-3 align-items-center">
                    <div class="col-4 text-right">
                        <span class="text-muted font-14">USA</span>
                    </div>
                    <div class="col-5">
                        <div class="progress" style={{ height: "5px" }}>
                            <div class="progress-bar bg-cyan" role="progressbar" style={{ width: "60%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-3 text-right">
                        <span class="mb-0 font-14 text-dark font-weight-medium">18%</span>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-4 text-right">
                        <span class="text-muted font-14">China</span>
                    </div>
                    <div class="col-5">
                        <div class="progress" style={{ height: "5px" }}>
                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "50%" }}
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="col-3 text-right">
                        <span class="mb-0 font-14 text-dark font-weight-medium">12%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarChart
