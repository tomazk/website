module Data

open System
open Fable.SimpleHttp
open Fable.SimpleJson

let inline makeDataLoader<'T>(url) =
    let mutable cached = None
    let fetch () = async {
        printfn "fetching %s" url
        let! code,json = Http.get url
        return
            match code with
            | 200 ->
                json
                |> SimpleJson.parse
                |> Json.convertFromJsonAs<'T>
                |> Ok
            | _ ->
                Error (sprintf "got http %d while fetching %s" code url)
    }
    let getOrFetch () = async {
        match cached with
        | Some x -> return x
        | None ->
            let! result = fetch ()
            cached <- Some result
            return result
    }
    getOrFetch

