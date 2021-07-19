function RecentActivities() {
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Recent Activity</h4>
                <div class="mt-4 activity">
                    <div class="d-flex align-items-start border-left-line pb-3">
                        <div>
                            <a href="javascript:void(0)" class="btn btn-info btn-circle mb-2 btn-item">
                                <i data-feather="shopping-cart"></i>
                            </a>
                        </div>
                        <div class="ml-3 mt-2">
                            <h5 class="text-dark font-weight-medium mb-2">New Product Sold!</h5>
                            <p class="font-14 mb-2 text-muted">John Musa just purchased <br /> Cannon 5M
                                Camera.
                            </p>
                            <span class="font-weight-light font-14 text-muted">10 Minutes Ago</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start border-left-line pb-3">
                        <div>
                            <a href="javascript:void(0)"
                                class="btn btn-danger btn-circle mb-2 btn-item">
                                <i data-feather="message-square"></i>
                            </a>
                        </div>
                        <div class="ml-3 mt-2">
                            <h5 class="text-dark font-weight-medium mb-2">New Support Ticket</h5>
                            <p class="font-14 mb-2 text-muted">Richardson just create support <br />
                                ticket</p>
                            <span class="font-weight-light font-14 text-muted">25 Minutes Ago</span>
                        </div>
                    </div>
                    <div class="d-flex align-items-start border-left-line">
                        <div>
                            <a href="javascript:void(0)" class="btn btn-cyan btn-circle mb-2 btn-item">
                                <i data-feather="bell"></i>
                            </a>
                        </div>
                        <div class="ml-3 mt-2">
                            <h5 class="text-dark font-weight-medium mb-2">Notification Pending Order!
                            </h5>
                            <p class="font-14 mb-2 text-muted">One Pending order from Ryne <br /> Doe</p>
                            <span class="font-weight-light font-14 mb-1 d-block text-muted">2 Hours
                                Ago</span>
                            <a href="javascript:void(0)"
                                class="font-14 border-bottom pb-1 border-info">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentActivities
