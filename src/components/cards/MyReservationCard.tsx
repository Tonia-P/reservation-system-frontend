import { FaRegCalendar } from "react-icons/fa"
import Button from "../interaction/Button"
import { EventType } from "../../contexts/EventContext"
import dayjs from "dayjs"

export const MyReservationCard = () => {
    return(
        <div className="w-full flex flex-row border border-0 rounded-xl drop-shadow-xl mr-3 mb-8 bg-primary-content">
      <img
        className="border border-0 w-32 rounded-t-lg"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAIVBMVEXl5eX////y8vLz8/Po6Oj8/Pz39/ft7e3v7+/p6en6+voWpc14AAADrElEQVR4nO2d2XKkMAwAY274/w/eoVI25pQ0JPEs6n4NULhLyEYak68vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICfpJEpfYsfzBRkutI3+bH0CnshjKVv81NpVfoIv2N0wRdCX/pGi1DvPEzrA3TBtzvNCd3OQ7v6+6C05zT8JH3a4Nue5wRBnz74fIafoM9gz2X4XeurLPrCUGwUxbjWZ7LnMfy2+qY6S2H7VQ3htybXN1Xr7N8Y7YVQaBDliPq6av/Wag2+EKoCIyjKS1/bDYcFJ3vw+Qu//ljdzH5Wkan/8t4/Gm2tYM0gU3pgv09fn76stVM3M+nf5naGS4/uN2mG7sxMW/fN6shzyS71jcN5vmuroyQ5vmHwkfrG6qqn0Z7XA3qrwMfp62uhHXRdTLGUZR6m7yLVJeTViGmN8xR9o0Jd0DXRLKucJ+gbK5W64x7GwSTS6DPgA/SpX2fXDcj5Uf/29Fr+bTRouune9K3sDdsIm1YmtP786MvtHVeecxfKCcSNvizvna7u2mxm0eU/N/qW46+aHosOXYnLi74lrq4fy+URV61fnOhbVsvSpLD406Q/J/rSwfKUuvhD33aUmohKTQ5FZ9iFvtS01RUEUlFBnn1d6EuDVNlbbMvh50JfPFJbTEkTDfrCMhnou5Xx0qJvD/p67YGJOHuIudKDvnig2l7KfmK8OtAXXVjKoLEKiL6U+iw/8ItapFW2A30xkVmaGJ3yHAf64hAtTchY3pIi1oG+OPEa7KV8KU296EMf+m6Avlto9VmmDvTthmjRp10rOtAX6yeWdZ/2HAf6YiS9s6dNilgH+tTv/xnx2tJxDvSl93998osBO6JvGaN9O7T60v8x4hjT7zO09lKzQ4xXD/rS06sNvxh84rPrQ19q/Rg/RCIvdVzoSxOpbvI1HO1DXwo/TcE+dckV62wf+lL2s3S+5cznRt/y40j9W6wmUTrRl21uvp5+e9tlvejLvIznYdUu2xR0bU03+kIjn5Htv9ckPlf68s31zdGkmv/0XltecKSvXW0g2my6XG/rUBdnHOnb7Wjrq3kn+dR1w2aXpfLJ9aZP+WUvQ13Vlz7V1zEsRX1n+q62kn9j21DuTd9rgr36MPNo/OCLP30vgWeboq3yfOqbP6WxNzhWb3yKxKe+ma7qx+/nuBlfS5j3LuJX34+APvSh7wbouwX6boG+W6DvFui7Bfpu0dRVKWr+LxQAAAAAAAAAAAAAAAAAAAAAAAAAAAC44B+CJSs/57yRIwAAAABJRU5ErkJggg=="
      />

      <div className="p-4 flex flex-row w-full items-center justify-between">

        <div>
        <p className="text-xl  font-bold">Name</p>
        <div className="flex flex-row items-baseline" >
        <FaRegCalendar />
        <div className="py-4 pl-3">Kappa</div>

        </div>

        </div>

        <div>

        <Button styles="btn btn-error mr-2">
            Cancel
        </Button>
        <Button styles="btn btn-success">
            Update
        </Button>
        </div>
      </div>
    </div>
    )
}