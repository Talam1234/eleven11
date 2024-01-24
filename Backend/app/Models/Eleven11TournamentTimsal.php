<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eleven11TournamentTimsal extends Model
{
    use HasFactory;
    protected $primaryKey = 'tournmaent_id';
    public function myContests()
    {
        return $this->hasOne(Eleven11MyContestTimsal::class, 'tournament_id');
    }

    public function player()
    {
        
    }
}
