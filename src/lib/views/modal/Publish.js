const PublishModal = () => {
    return (`
        <div>

            <p>Do you want yo publish a new revision of your template to IPFS, the permanent web?</p>
        
            <div class="grid grid-cols-3 gap-4space-y-1.5">
                <div class="w-120">
                    <img src="https://moralis.io/wp-content/uploads/2021/06/21_06_What_is_Interplanetary-File-System_IPFS.jpg" class="w-100" alt="Learn more about IPFS">
                </div>
                <div class="w-200">
                    <h6 class="mt-0">About IPFS</h6>
                    <p>IPFS is a distributed system for storing and accessing files, websites, applications, and data.</p>
                    <a target="_blank" href="https://moralis.io/what-is-ipfs-interplanetary-file-system/" class="stretched-link">Learn more!</a>
                </div>
            </div>


            <button id="publish-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onclick="handlePublishToIpfs(event)">Publish</button>
            <button id="wait-publish-btn" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" disabled>
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Publishing...
            </button>
        </div>
    `)
}

export default PublishModal;