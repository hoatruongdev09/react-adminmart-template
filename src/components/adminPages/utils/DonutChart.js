function DonutChart() {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Total Sales</h4>
                <div id="campaign-v2" class="mt-2" style={{ height: "283px", width: "100%" }}></div>
                <ul class="list-style-none mb-0">
                    <li>
                        <i class="fas fa-circle text-primary font-10 mr-2"></i>
                        <span class="text-muted">Direct Sales</span>
                        <span class="text-dark float-right font-weight-medium">$2346</span>
                    </li>
                    <li class="mt-3">
                        <i class="fas fa-circle text-danger font-10 mr-2"></i>
                        <span class="text-muted">Referral Sales</span>
                        <span class="text-dark float-right font-weight-medium">$2108</span>
                    </li>
                    <li class="mt-3">
                        <i class="fas fa-circle text-cyan font-10 mr-2"></i>
                        <span class="text-muted">Affiliate Sales</span>
                        <span class="text-dark float-right font-weight-medium">$1204</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DonutChart
