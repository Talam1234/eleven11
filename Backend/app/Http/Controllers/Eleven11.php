<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Eleven11ContestTimsal;
use App\Models\Eleven11TournamentTimsal;
use App\Models\Eleven11MyContestTimsal;
use App\Models\Eleven11MyPlayerTimsal;
use App\Models\Eleven11PlayerTimsal;

class Eleven11 extends Controller
{
    //
    function getContestData()
    {
        $jsonData = Eleven11ContestTimsal::all();
        $data = json_decode($jsonData, true);
        $collection = collect($data);
        $groupedData = $collection->groupBy('contest_category');
        return $groupedData;
    }

    function getTournamentData()
    {
        return Eleven11TournamentTimsal::all();
    }

    function postmyContest(Request $req)
    {
        $data = new Eleven11MyContestTimsal;
        $data->tournament_id = $req->t_id;
        $data->contest_id = $req->c_id;
        $data->Team = $req->team;
        $result = $data->save();
        if($result)
        {
            return ["result"=>"data has been Saved"];   
        }
        else{
            return ["result"=>"Operation failed"];
        }
    }

    function getmyContest(){
        // $my_contest_data = ;
        // return $my_contest_data;
        // $mergedData = [];

        $joinedData = Eleven11MyContestTimsal::with(['tournament','contest'])->get();
        return $joinedData;

        // foreach ($my_contest_data as $data) {
            // return Eleven11TournamentTimsal::find($data['tournament_id']);
            // Retrieve tournament and contest data
            // $tournament = Eleven11TournamentTimsal::find($data['tournament_id']);
            // $contest = Eleven11ContestTimsal::find($data['contest_id']);
    
            // // Merge data
            // $mergedData[] = [
            //     'id' => $data['id'],
            //     'tournament' => $tournament,
            //     'contest' => $contest,
            // ];
        // }
        // return $mergedData;
    }

    function getPlayersData($id)
    {
        // return Eleven11PlayerTimsal::all();
        $id_ = Eleven11TournamentTimsal::find($id);
        // return $id_;
        $tournament_data = json_decode($id_, true);
        // return $tournament_data;
        // return $tournament_data['tournament_team1'];
        $playerData = Eleven11PlayerTimsal::whereIn('player_country',[$tournament_data['tournament_team1'],$tournament_data['tournament_team2']])->get();
        // $jsonData = Eleven11PlayerTimsal::all();
        // $data = json_decode($jsonData, true);
        // $collection = collect($data);
        // $filter1 = $collection->where('player_country','IND')->get();
        // $filter1 = $collection->whereIn('player_country', [$tournament_data['tournament_team1'],$tournament_data['tournament_team2']])->values();
        // $groupedData = $filter1->groupBy('player_country');
        // $player = json_decode($filter1, true);
        // $playerarray = array_values($player);

        return response(['tournament'=>$id_,'players'=>$playerData]);
        // return $filter1;
    }

    function postmyPlayer(Request $req)
    {
        $data = new Eleven11MyPlayerTimsal;
        $data->player_array = json_encode($req->array_data);
        $data->tournament_id = $req->t_id;
        $result = $data->save();
        if($result)
        {
            return ["result"=>"Team has created"];   
        }
        else{
            return ["result"=>"Operation failed"];
        }
    }

    function getmyPlayers($id)
    {
        // return $id;
        // Ensure $id is an array
        if (!is_array($id)) {
            // Handle the case where $id is not an array (e.g., convert it to an array)
            $id = [$id];
        }
    // return $id;
        // $data =  Eleven11MyPlayerTimsal::all();
        $data =  Eleven11MyPlayerTimsal::whereIn('tournament_id',$id)->get();
        // $res = json_decode($data,true);
        return $data;
        // return $res['tournament_id'];
        // $res = json_encode($data);
        // return json_decode($data['player_array']);
        // foreach($data as $item)
        // {
        //     return array($item['player_array']);
        // }
    }
}
