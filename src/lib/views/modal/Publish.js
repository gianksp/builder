const PublishModal = () => {
    return (`
        <div>

            <p>Do you want yo publish a new revision of your template to IPFS, the permanent web?</p>
        
            <div class="row mb-2">
                <div class="col">
                    <img src="https://moralis.io/wp-content/uploads/2021/06/21_06_What_is_Interplanetary-File-System_IPFS.jpg" class="w-100" alt="Learn more about IPFS">
                </div>
                <div class="col-9">
                    <h6 class="mt-0">About IPFS</h6>
                    <p>IPFS is a distributed system for storing and accessing files, websites, applications, and data.</p>
                    <a target="_blank" href="https://moralis.io/what-is-ipfs-interplanetary-file-system/">Learn more!</a>
                </div>
            </div>

            <button id="publish-btn" class="btn btn-primary" type="submit" onclick="handlePublishToIpfs(event)">Publish</button>
            <button id="wait-publish-btn" class="btn btn-primary" type="button" disabled style="display:none">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Publishing...
            </button>
        </div>
    `)
}

export default PublishModal;