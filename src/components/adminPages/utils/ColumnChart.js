function ColumnChart() {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Net Income</h4>
                <div class="net-income mt-4 position-relative" style={{ height: "294px" }}></div>
                <ul class="list-inline text-center mt-5 mb-2">
                    <li class="list-inline-item text-muted font-italic">Sales for this month</li>
                </ul>
            </div>
        </div>
    )
}

export default ColumnChart
